<?php

class Gab extends Eloquent
{
    public function user()
    {
        return $this->belongsTo('User');
    }

    public function likes()
    {
        return $this->hasMany('Like');
    }

}