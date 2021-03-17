<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Contact extends Model
{
    use HasFactory;

    /**
     * Undocumented variable
     */
    protected $table = "contacts";

    /**
     * Undocumented variable
     */
    protected $primaryKey = "id";

    /**
     * Undocumented variable
     *
     * @var boolean
     */
    protected $guarded = [];    
}
