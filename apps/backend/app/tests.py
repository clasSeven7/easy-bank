from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import AccessToken
from django.utils import timezone

from .models import Blog


class BlogAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Criação de um usuário para autenticação
        self.user = User.objects.create_user(
            username='admin', password='admin')
        self.access_token = AccessToken.for_user(self.user)
        self.client.credentials(
            HTTP_AUTHORIZATION=f'Bearer {self.access_token}')

    # função auxiliar que facilita a criação de instâncias do modelo Blog durante os testes.
    def create_blog(self, title='Blog', content='Conteúdo'):
        return Blog.objects.create(title=title, content=content)

    def test_create_blog(self):
        response = self.client.post(
            '/api/blogs/',
            {
                'user': self.user.id,  # ID do usuário
                'title': 'Novo Post',
                'content': 'Conteúdo do novo post',
                'data': timezone.now().date()  # Adicionando a data atual
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Blog.objects.count(), 1)
        blog = Blog.objects.first()
        self.assertEqual(blog.title, 'Novo Post')
        self.assertEqual(blog.content, 'Conteúdo do novo post')

    def test_create_blog_without_title(self):
        response = self.client.post(
            '/api/blogs/',
            {
                'user': self.user.id,  # ID do usuário
                'content': 'Conteúdo sem título',
                'data': timezone.now().date()  # Adicionando a data atual
            }
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_blog_without_content(self):
        response = self.client.post(
            '/api/blogs/',
            {
                'user': self.user.id,  # ID do usuário
                'title': 'Título sem conteúdo',
                'data': timezone.now().date()  # Adicionando a data atual
            }
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_retrieve_blog(self):
        blog = self.create_blog(title='Blog', content='Conteúdo')
        response = self.client.get(f'/api/blogs/{blog.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], blog.title)
        self.assertEqual(response.data['content'], blog.content)

    def test_retrieve_nonexistent_blog(self):
        response = self.client.get('/api/blogs/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_update_blog(self):
        blog = self.create_blog()
        response = self.client.patch(
            f'/api/blogs/{blog.id}/', {'title': 'Blog Atualizado'}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Blog.objects.get(id=blog.id).title, 'Blog Atualizado')

    def test_delete_blog(self):
        blog = self.create_blog()
        response = self.client.delete(
            f'/api/blogs/{blog.id}/'
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Blog.objects.count(), 0)
