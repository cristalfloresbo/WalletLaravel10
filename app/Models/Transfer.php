<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Wallet;

class Transfer extends Model
{
    use HasFactory;

    public function wallets(): BelongsTo {
        return $this->belongsTo(Wallet::class);
    }
}
