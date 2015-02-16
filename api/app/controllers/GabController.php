<?php

class GabController extends \BaseController {

    public function store($id)
    {
        $input['id'] = $id;
        $input['content'] = Input::get('content');

        $rules = array(
                       'id' => 'required',
                       'content' => 'required|max:255',
                       );

        $validator = Validator::make($input, $rules);

        if ($validator->fails()) {
            return Response::json(array('message' => $validator->messages()), 400);
        }
        else
        {
            $gab = new Gab;
            $gab->user_id = $id;
            $gab->content = Input::get('content');
            $gab->save();

            return Response::json(array('message' => 'gab created sucessfully'), 200);

        }
    }

    public function user($id)
    {
        $gabs = array();
        
        $gab = Gab::where('user_id','=',$id)->get();

        if (!$gab) {
            return Response::json(array('message' => 'gabs not found'), 404);

        } else {
            foreach ($gab as $gab) {
                $gabs[] = $gab;
            }
        }

        return $gabs;
    }

    public function show($id)
    {

        $user = User::find($id);

        if (!$user)
        {
            return Response::json(array('message' => 'User not found'), 404);
        } else {

            return $user;

        }

    }

    public function showAll()
    {
        $gab = Gab::all();

        return $gab;
    }
}
