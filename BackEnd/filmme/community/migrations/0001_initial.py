<<<<<<< HEAD
# Generated by Django 5.0.4 on 2024-05-23 15:34
=======
# Generated by Django 5.0.4 on 2024-05-30 15:50
>>>>>>> 01bbfdde4822d20c23b39ba778a11f03818c48f0

import community.models
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('main', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Community',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.CharField(choices=[('common', 'common'), ('cinema_tip', 'cinema_tip'), ('suggestion', 'suggestion')], max_length=10)),
                ('title', models.CharField(max_length=30)),
                ('content', models.TextField(max_length=5000)),
                ('view_cnt', models.PositiveIntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('cinema', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='community_cinema', to='main.cinema')),
                ('writer', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CommunityComment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('content', models.TextField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments_community', to='community.community')),
                ('writer', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CommunityImage',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to=community.models.community_image_upload_path)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images_community', to='community.community')),
            ],
        ),
        migrations.CreateModel(
            name='CommunityLike',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('community', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes_community', to='community.community')),
                ('writer', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
