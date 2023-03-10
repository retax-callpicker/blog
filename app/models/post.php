<?php

class Post extends AppModel {

    var $name = 'Post';

    var $hasMany = "Coment";

    var $validate = array(
        'title' => array(
            'rule' => 'notEmpty'
        ),
        'body' => array(
            'rule' => 'notEmpty'
        ),
        'image' => array(
            'rule' => 'notEmpty'
        )
    );

}
