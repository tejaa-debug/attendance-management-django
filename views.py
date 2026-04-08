from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Assuming you have your models defined
from .models import User, Employee, Attendance, Shift, Leave, Report

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    ...  # Define serializer and other configurations

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [IsAuthenticated]
    ...  # Define serializer and other configurations

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    permission_classes = [IsAuthenticated]
    ...  # Define serializer and other configurations

class ShiftViewSet(viewsets.ModelViewSet):
    queryset = Shift.objects.all()
    permission_classes = [IsAuthenticated]
    ...  # Define serializer and other configurations

class LeaveViewSet(viewsets.ModelViewSet):
    queryset = Leave.objects.all()
    permission_classes = [IsAuthenticated]
    ...  # Define serializer and other configurations

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    permission_classes = [IsAuthenticated]
    ...  # Define serializer and other configurations