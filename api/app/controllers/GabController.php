<?php

class GabController extends \BaseController {

    public function newGab($id)
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

    public function getGabs($id)
    {
        $gab = Gab::where('user_id','=',$id)->firstOrFail();

        if (!$gab)
        {
            return Response::json(array('message' => 'gab not found'), 404);

        } else { return $gab; }
    }
}
