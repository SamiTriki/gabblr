<?php

class Gab extends Eloquent
{
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array('password');

    // mass assignable
    protected $fillable = array('username', 'email', 'displayName');

    // avoid mass asignement
    protected $guarded = array('id', 'password');

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
      return $this->getKey();
    }
     
    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
      return $this->password;
    }
     
    /**
     * Get the e-mail address where password reminders are sent.
     *
     * @return string
     */
    public function getReminderEmail()
    {
      return $this->email;
    }
}