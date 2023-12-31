<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('db_menu', function (Blueprint $table) {
            $table->id(); //id
            $table->string('name');
            $table->string('link');
            $table->unsignedInteger('table_id');
            $table->unsignedInteger('sort_order');
            $table->unsignedInteger('parent_id');
            $table->string('type');
            $table->mediumText('content');
            $table->timestamps(); //created_at, updated_at
            $table->unsignedInteger('created_by')->default(1);
            $table->unsignedInteger('updated_by')->nullable();
            $table->unsignedTinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_menu');
    }
};
