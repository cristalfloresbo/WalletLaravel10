<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transfer>
 */
class TransferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => fake()->text($maxNBChars = 200),
            'mount' => fake()->numberBetween($min = 10, $max = 90),
            'wallet_id' => fake()->randomDigitNotNull,
        ];
    }
}
