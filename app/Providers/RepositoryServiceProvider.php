<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        // $sourceDir = __DIR__ . '/stubs';
        // $targetDir = resource_path('stubs');
        //
        // $this->publishes([
        //     $sourceDir . '/criteria.stub' => $targetDir . '/criteria.stub',
        //     $sourceDir . '/repository.stub' => $targetDir . '/repository.stub',
        //     $sourceDir . '/repository_interface.stub' => $targetDir . '/repository_interface.stub',
        // ]);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        // if ($this->app->runningInConsole()) {
        //     $this->commands([
        //         MakeCriteriaCommand::class,
        //         MakeRepositoryCommand::class,
        //     ]);
        // }
    }
}
