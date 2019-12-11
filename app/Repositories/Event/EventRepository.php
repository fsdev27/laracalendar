<?php

namespace App\Repositories\Event;

use App\Models\Event;
use App\Models\EventDate;

class EventRepository implements EventRepositoryInterface
{
    /**
     * Undocumented function
     *
     * @param array $data
     * @return void
     */
    public function create($data)
    {
        $event = Event::create(['name' => $data->name]);
        EventDate::insert($this->transformSchedules($data->schedules, $event->id));
        return $event;
    }

    /**
     * Undocumented function
     *
     * @param array $data
     * @param int $id
     * @return array
     */
    public function transformSchedules($data, $id)
    {
        return collect($data)->map(function ($item) use ($id) {
            return [
                'event_id' => $id,
                'date' => $item['date'],
                'created_at' => now(),
                'updated_at' => now()
            ];
        })->toArray();
    }
}
