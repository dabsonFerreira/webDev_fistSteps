# Generated by Django 4.0.4 on 2022-06-25 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_alter_product_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='quantity',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=6),
        ),
    ]
