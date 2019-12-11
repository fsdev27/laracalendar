<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return collect($this->schedules)->map(function ($item) {
            return [
                'dayOfMonth' => $item->date->format('d'),
                'isoDayOfWeek' => (int) $item->date->format('w'),
                'localDayOfWeek' => $item->date->format('D'),
                'date' => $item->date->format('Y-m-d'),
                'value' => $this->name
            ];
        });
    }
}
