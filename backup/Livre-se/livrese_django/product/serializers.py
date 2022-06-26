from rest_framework import serializers

from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "get_absolute_url",
            "description",
            "price",
            "get_image",
            "get_thumbnail",
            "quantity",#acrescentei
<<<<<<< HEAD:backup/Livre-se/livrese_django/product/serializers.py
            #"user_id"
=======
            "idConta"#acrescentei - ideia de relacionar conta ao produto!
>>>>>>> main:portfolio/Livre-se/livrese_django/product/serializers.py
        )

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = (
            "id",
            "name",
            "get_absolute_url",
            "products",
        )