<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddScreenshotFieldToInteractionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('interactions', function(Blueprint $table)
		{
			$table->string('screenshot')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('interactions', function(Blueprint $table)
		{
			$table->dropColumn('screenshot');
		});
	}

}
