from django.db import models
from softdelete.models import BaseModel


class Blog(BaseModel):
    image_blog = models.ImageField(
        upload_to='image_blog/', null=True, blank=True)
    data = models.DateField()
    user = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title


class Comment(BaseModel):
    icon_user = models.ImageField(
        upload_to='icon_user/', null=True, blank=True)
    content = models.TextField()
    username = models.CharField(max_length=200)
    star = models.CharField(max_length=1)

    def __str__(self):
        return self.user


class CardCredit(BaseModel):
    card_image = models.ImageField(
        upload_to='card_image/', null=True, blank=True)
    name = models.CharField(max_length=200)
    content = models.TextField()
    accepted = models.CharField(max_length=50)
    valid_in = models.CharField(max_length=50)
    transaction = models.CharField(max_length=50)

    def __str__(self):
        return self.name
