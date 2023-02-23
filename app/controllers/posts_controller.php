<?php
class PostsController extends AppController {

    var $name = 'Posts';

    function index() {
        return $this->_jsonResponse(200, array("Mode" => "List All Posts"));
    }

    function view($id = null) {
        return $this->_jsonResponse(200, array("Mode" => "View post with id: $id"));
    }

    function add() {
        return $this->_jsonResponse(200, array("Mode" => "Add new post"));
    }

    function edit($id = null) {
        return $this->_jsonResponse(200, array("Mode" => "Edit post with id: $id"));
    }

    function delete($id = null) {
        return $this->_jsonResponse(200, array("Mode" => "Delete post with id: $id"));
    }

}
