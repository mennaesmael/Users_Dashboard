<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\LoginRequets;
use App\Http\Requests\SignupRequets;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
 

    public function login(LoginRequets $request){

 $credintiols = $request -> validated();
 if (!Auth::attempt($credintiols));{
 return response(['message','Provided email adress or password is not correct']);
 }

 $user = Auth::user();

  $token = $user->createToken (name: 'main')->plainTextToken;
    
       return response (compact( var_name: 'user', var_names: 'token'));
    }

    public function signup(SignupRequets $request){

        
        $data = $request ->validated();

      /** @var \App\Models\User $user  */  
        $user = User::create([
            'name'=> $data ['name'],
            'email'=> $data ['email'],
            'password'=>  bcrypt($data['password']),
        ]);

       $token = $user->createToken (name: 'main')->plainTextToken;
    
       return response (compact( var_name: 'user', var_names: 'token'));
    }


    public function logout(Request $request){

        $user = $request->user();
        $user ->currentAcessToken()->delete();
        return response('',204);

    }
}
