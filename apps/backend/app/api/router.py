from rest_framework import routers
from app.api import viewsets

blog_router = routers.DefaultRouter()
blog_router.register(r'blogs', viewsets.BlogViewSet)

comment_router = routers.DefaultRouter()
comment_router.register(r'comments', viewsets.CommentViewSet)

cardcredit_router = routers.DefaultRouter()
cardcredit_router.register(r'cardcredits', viewsets.CardCreditViewSet)

urlpatterns = blog_router.urls + comment_router.urls + cardcredit_router.urls
