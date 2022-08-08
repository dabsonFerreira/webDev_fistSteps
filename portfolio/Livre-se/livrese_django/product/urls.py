from django.urls import path, include

from product import views

urlpatterns = [
    path('latest-products/', views.LatestProductsList.as_view()),
    path('categories/',views.categories.as_view()),#assim consigo mandar as categorias para o FE    
    path('addProductFE/', views.addProductFE),#meu teste para mandar para o BE
    path('marketplace/', views.myProductsList.as_view()), #acho que o 'orders/' é o nome que vc quiser dar... 
    path('likesFE/', views.like),
    path('products/search',views.search),#para pegar informação do servidor
    path('products/<slug:category_slug>/<slug:product_slug>/', views.ProductDetail.as_view()),
    path('products/<slug:category_slug>/', views.CategoryDetail.as_view()),
]