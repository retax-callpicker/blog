<?php

class Coment extends AppModel {

    var $name = 'Coment';

    var $belongsTo = "Post";

    var $validate = array(
        'post_id' => array(
            'rule' => 'notEmpty'
        ),
        'user' => array(
            'rule' => 'notEmpty'
        ),
        'coment' => array(
            'rule' => 'notEmpty'
        )
    );

}
