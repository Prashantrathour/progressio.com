# Generated by Django 4.2.4 on 2023-09-05 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0005_alter_student_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='loginuser',
            field=models.CharField(max_length=100),
        ),
    ]