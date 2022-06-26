# Generated by Django 4.0.4 on 2022-06-25 19:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0005_product_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='user',
            field=models.ForeignKey(default='adm', on_delete=django.db.models.deletion.CASCADE, related_name='addProductFE', to=settings.AUTH_USER_MODEL),
        ),
    ]
