<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('batch_code');
            $table->time('duration');
            $table->date('date');
            // $table->foreignUuid('batch_type_id')->nullable(false)->constrained('batch_types');
            $table->foreignUuid('batch_slot_id')->constrained('batch_slots');
            // $table->foreignUuid('location_id')->constrained('locations');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batches');
    }
}
