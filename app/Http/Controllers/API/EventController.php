<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use App\Repositories\Event\EventRepository;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    private $eventRepository;

    /**
     * Initialize Event Object
     *
     * @param EventRepository $eventRepository
     */
    public function __construct(EventRepository $eventRepository)
    {
        $this->eventRepository = $eventRepository;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'bail|required|string|min:3|max:70',
            'schedules.*.date' => 'bail|required|date_format:Y-m-d'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_BAD_REQUEST);
        }

        $created = $this->eventRepository->create($request);

        return response()->json([
            'data' => new EventResource($created)
        ], Response::HTTP_CREATED);
    }
}
