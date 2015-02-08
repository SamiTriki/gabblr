<?php

class UsersController extends \BaseController {

    public function getUserById($id)
    {

        $user = User::find($id);

        if (!$user)
        {
            return Response::json(array('message' => 'User not found'), 404);
        } else {

            return $user;

        }

    }
}