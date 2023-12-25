<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequets;
use App\Http\Requests\SignupRequets;
use App\Models\User;
use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Termwind\Components\Li;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

}
