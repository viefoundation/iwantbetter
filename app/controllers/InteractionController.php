<?php

use Austen\Repositories\InteractionRepository;

class InteractionController extends BaseController {

	protected $interaction;

	public function __construct(InteractionRepository $interaction) {

		$this->interaction = $interaction;

	}

	public function index() {

		$interactions = $this->interaction->getList();

		if ($interactions === false) return Response::json(['message' => 'Sorry, there was an error on our end, we are fixing it.'], 404);

		return Response::json(['data' => $interactions], 200);


	}


	/**
	 * Store a newly created resource in storage.
	 * POST /interaction
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();

		$interaction = $this->interaction->store($input);

		if ($interaction === false) return Response::json(['message' => 'Sorry, there was something wrong saving your input'], 404);

		return Response::json(['data' => $interaction], 200);

	}

	/**
	 * Display the specified resource.
	 * GET /interaction/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		


	}



	/**
	 * Remove the specified resource from storage.
	 * DELETE /interaction/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		


	}

}