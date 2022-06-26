from django.db.models import Q#para fazer a pesquisa no db para a lupa
from django.http import Http404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view#para colocar uma lupa - pra fazer pesquisa na pag

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class LatestProductsList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

#this power is my own creation -> retorna as categorias existentes no banco
class categories(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

##########another of my steps######################################
#meus acréscimos para tentar ler do FE
from django.conf import settings
#from django.contrib.auth.models import User
from django.shortcuts import render

from rest_framework import status, authentication, permissions
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.views import APIView

#@api_view(['POST'])
@authentication_classes([authentication.TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])

def addProductFE(request):
    addProduct = ProductSerializer(data=request.data)#tentando ler FE
    if addProduct.is_valid():
        try:
            return Response(addProduct.data, status=status.HTTP_201_CREATED)
        except Exception:
            return Response(addProduct.errors, status = status.HTTP_400_BAD_REQUEST)
    
    return Response(addProduct.errors, status = status.HTTP_400_BAD_REQUEST)

######################################################

class ProductDetail(APIView):
    def get_object(self, category_slug, product_slug):
        try:
            return Product.objects.filter(category__slug= category_slug).get(slug=product_slug)
        except Product.DoesNotExist:
            raise Http404
        
    def get(self, request, category_slug, product_slug, format=None):
        product = self.get_object(category_slug, product_slug)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

class CategoryDetail(APIView):
    def get_object(self, category_slug):
        try:
            return Category.objects.get(slug=category_slug)
        except Category.DoesNotExist:
            raise Http404
    
    def get(self, request, category_slug, format=None):
        category = self.get_object(category_slug)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

@api_view(['POST'])
def search(request):
    query = request.data.get('query', '')

    if query:
        products: Product.objects.filter(Q(name__icontains=query) | Q(description__icontains=query))
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    else:
        return Response({"products" : []})