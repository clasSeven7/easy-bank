from rest_framework import routers
from app.api import viewsets

blog_router = routers.DefaultRouter()
blog_router.register('', viewsets.BlogViewSet)

comment_router = routers.DefaultRouter()
comment_router.register('', viewsets.CommentViewSet)

cardcredit_router = routers.DefaultRouter()
cardcredit_router.register('', viewsets.CardCreditViewSet)
