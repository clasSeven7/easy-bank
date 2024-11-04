from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import AccessToken

from .models import Blog, Comment, CardCredit


class BlogAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

        self.user = User.objects.create_user(
            username='admin', password='admin')
        self.access_token = AccessToken.for_user(self.user)
        self.authorization_header = f'Bearer {self.access_token}'

    def create_blog(self, title='Blog', content='Conteúdo'):
        return Blog.objects.create(title=title, content=content)

    def test_create_blog(self):
        response = self.client.post(
            '/api/post/', {'title': 'Novo Post',
                           'data': '27/02/2023',
                           'user': 'admin',
                           'content': 'Conteúdo do novo post', },
            HTTP_AUTHORIZATION=self.authorization_header
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Blog.objects.count(), 1)
        blog = Blog.objects.first()
        self.assertEqual(blog.title, 'Novo Post')
        self.assertEqual(blog.content, 'Conteúdo do novo post')

    def test_retrieve_blog(self):
        blog = self.create_blog(title='Blog', content='Conteúdo')
        response = self.client.get(
            f'/api/blog/{blog.id}/', HTTP_AUTHORIZATION=self.authorization_header)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], blog.title)
        self.assertEqual(response.data['content'], blog.content)

    def test_update_blog(self):
        blog = self.create_blog()
        response = self.client.patch(
            f'/api/blog/{blog.id}/', {'title': 'Blog Atualizado'},
            HTTP_AUTHORIZATION=self.authorization_header)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Blog.objects.get(id=blog.id).title, 'Blog Atualizado')

    def test_delete_blog(self):
        post = self.create_blog()
        response = self.client.delete(
            f'/api/blog/{post.id}/', HTTP_AUTHORIZATION=self.authorization_header)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Blog.objects.count(), 0)
