# Generated by Django 5.1.2 on 2024-11-04 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_blog', models.ImageField(blank=True, null=True, upload_to='image_blog/')),
                ('data', models.DateField()),
                ('user', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='CardCredit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_image', models.ImageField(blank=True, null=True, upload_to='card_image/')),
                ('number', models.CharField(max_length=16)),
                ('name', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('cvv', models.CharField(max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon_user', models.ImageField(blank=True, null=True, upload_to='icon_user/')),
                ('content', models.TextField()),
                ('username', models.CharField(max_length=200)),
                ('start', models.CharField(max_length=1)),
            ],
        ),
    ]