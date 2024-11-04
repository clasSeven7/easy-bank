from rest_framework import viewsets, permissions
from app import models
from app.api import serializers


class BlogViewSet(viewsets.ModelViewSet):
    queryset = models.Blog.objects.all()
    serializer_class = serializers.BlogSerializer
    permission_classes = [permissions.IsAuthenticated]


class CommentViewSet(viewsets.ModelViewSet):
    queryset = models.Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    permission_classes = [permissions.IsAuthenticated]


class CardCreditViewSet(viewsets.ModelViewSet):
    queryset = models.CardCredit.objects.all()
    serializer_class = serializers.CardCreditSerializer
    permission_classes = [permissions.IsAuthenticated]
