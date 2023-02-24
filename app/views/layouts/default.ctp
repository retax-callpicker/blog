<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->
    <title><?php echo $title_for_layout?></title>
    <?php

    echo $html->css(array(
        "bs4/4.5.0/bootstrap.min",
        "bootstrap-vue/v2.21.0/bootstrap-vue.min"
    ));

    echo $javascript->link(array(
        'jquery/jquery-3.2.1.min.js',
        'bs4/4.5.0/bootstrap.bundle.min.js'
    ));

    echo $scripts_for_layout;
    
    ?>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <?php echo $content_for_layout ?>
  </body>
</html>