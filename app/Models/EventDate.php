<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventDate extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'event_id' => 'integer',
        'date' => 'datetime:Y-m-d',
    ];

    /**
     * Get the event of the dates.
     *
     */
    public function event()
    {
        return $this->belongsTo('App\Models\Event');
    }
}
