<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @var array
     */
    protected $repositories = [
        // \App\Repository\UserRepositoryInterface::class => \App\Repository\UserRepository::class,
    ];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerRepositories();
    }

    /**
     * Register repositories
     */
    protected function registerRepositories()
    {
        // $this->app->register(RepositoryServiceProvider::class);
        foreach ($this->repositories as $interface => $class) {
            $this->app->bind($interface, $class);
        }
    }
}
