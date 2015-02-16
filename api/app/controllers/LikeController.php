<?php

class LikeController extends \BaseController {

    public function store($gab_id, $id)
    {
        $input['gab_id'] = $gab_id;
        $input['user_id'] = $id;

        $rules = array(
                       'gab_id' => 'required',
                       'user_id' => 'required',
                       );

        $validator = Validator::make($input, $rules);

        if ($validator->fails()) {
            return Response::json(array('message' => $validator->messages()), 400);
        }
        else
        {   
            $isliked;
            $isliked = Like::where('user_id','=',$id)
                            ->where('gab_id', '=', $gab_id)->first();


            if ($isliked) {
                return Response::json(array('message' => 'You already liked this gab'), 403);
            } else {
                $like = new Like;
                $like->user_id = $id;
                $like->gab_id = $gab_id;
                $like->save();

                return Response::json(array('message' => 'Gab sucessfully liked'), 200);  
            }


        }
    }

    public function destroy($gab_id, $id) {

        $like = Like::where('user_id','=',$id)
                    ->where('gab_id', '=', $gab_id)->first();

        if ($like) {
            $like->delete();
            return Response::json(array('message' => 'Gab sucessfully unliked'), 200);

        } else {
            return Response::json(array('message' => 'Like not found'), 404);
        }
        

    }

}
