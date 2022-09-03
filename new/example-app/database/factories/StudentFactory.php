<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'profile' => $this->faker->text(),
            'email' => $this->faker->unique()->email(),
            'name' => $this->faker->name(),
            'age' => $this->faker->numerify('##'),
            'address' => $this->faker->address(),
            'phone' => $this->faker->numerify("09########"),
            'created_at' => $this->faker->date('Y-m-d'),
            'updated_at' => $this->faker->date('Y-m-d'),
        ];
    }
}
