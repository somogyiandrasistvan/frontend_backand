<?php

use App\Models\Writer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->id('id');
            $table->string('nev');
            $table->integer('szul');
            $table->timestamps();
        });

        Writer::create(['nev' => 'Andras', 'szul' => 2002]);
        Writer::create(['nev' => 'Csenge', 'szul' => 2000]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};
