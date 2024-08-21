<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $appName = env('APP_NAME');
    return Inertia::render('Home', compact('appName'));
});
