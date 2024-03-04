<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Wallet;
use App\Models\Transfer;

class WalletTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */
    public function testGetWallet(): void
    {
        $wallet = Wallet::factory()->create();
        $transfer = Transfer::factory(3) -> create([
            'wallet_id' => $wallet->id
        ]);
        $response = $this->json('GET', 'api/wallet');

        $response->assertStatus(200)
                  ->assertJsonStructure([
                    'id', 'money', 'transfers' => [
                        '*' => [
                            'id', 'mount', 'description', 'wallet_id',
                        ],
                    ]]);
        $this->assertCount(3, $response->json()['transfers']);
    }
}
