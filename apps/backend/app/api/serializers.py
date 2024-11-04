from app import models
from rest_framework import serializers


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = '__all__'


class CardCreditSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CardCredit
        fields = '__all__'
