<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\Wallet;
use App\Models\Transfer;
use Tests\TestCase;

class TransferTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_post_transfer(): void
    {
        $wallet = Wallet::factory()->create();
        $transfer = Transfer::factory()->make(); // on memory
        $response = $this->json('POST', '/api/transfer', [
            'description'=>$transfer->description,
            'mount'=>$transfer->mount,
            'wallet_id'=>$wallet->id,
        ]);

        $response->assertJsonStructure([
            'id', 'description', 'mount', 'wallet_id'
        ])->assertStatus(201);

        $this->assertDatabaseHas('transfers', [
            'description' => $transfer->description,
            'mount' =>$transfer->mount,
            'wallet_id' =>$wallet->id,
        ]);

        $this->assertDatabaseHas('wallets', [
            'id' => $wallet->id,
            'money' => $wallet->money + $transfer->mount,
        ]);
    }
}
