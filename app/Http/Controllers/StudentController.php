<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Student;

class StudentController extends Controller
{
    public function index() {
        return Student::all();
    }
}
