from django.shortcuts import render
from .models import Image
from .serializers import ImageSerializer
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny



class ImageViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    # permissions = (IsAuthenticated)
    permissions = (AllowAny,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
