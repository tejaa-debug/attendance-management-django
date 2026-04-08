from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'employee_id', 'department', 'position']

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ['id', 'employee', 'check_in', 'check_out', 'date']

class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = ['id', 'employee', 'date', 'shift_start', 'shift_end']

class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leave
        fields = ['id', 'employee', 'leave_type', 'start_date', 'end_date', 'status']

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['id', 'employee', 'attendance', 'report_date', 'details']