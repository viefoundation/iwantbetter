# I Want Better

## Build

*assuming you are using homestead, vagrant, and associated configuration outlined* [here](http://laravel.com/docs/4.2/homestead)

* clone the repo
* ssh into your vagrant installation
* `cd` into the iwantbetter folder per your vagrant/homestead configuration
* run `composer install`
* create databased named `iwantbetter` inside of your vagrant machine. (database credentials are based on default homestead configuration)
* run `php artisan migrate`
* `cd` into public directory
* run `npm install`
* run `grunt` for building css and js assets


## Notes

Digital interaction can be found at the /digital-interaction route





