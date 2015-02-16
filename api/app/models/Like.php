<?php

class Like extends Eloquent
{
    public function gab()
    {
        return $this->belongsTo('Gab');
    }

}