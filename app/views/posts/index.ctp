<h1>Blog posts</h1>
<?php echo $html->link('Agregar Post', array('controller' => 'posts', 'action' => 'add'))?>
<table>
    <tr>
        <th>Id</th>
        <th>Título</th>
        <th>Acciones</th>
        <th>Fecha de creación</th>
    </tr>

    <!-- Aqui se hace el ciclo que recorre nuestros arreglo $posts , imprimiendo la información de cada post-->

    <?php foreach ($posts as $post): ?>

    <tr>
        <td><?php echo $post['Post']['id']; ?></td>
        <td>
            <?php echo $html->link($post["Post"]["title"], "/posts/view/".$post['Post']['id']); ?>
        </td>
        <td>
        <?php echo $html->link('Eliminar', array('action' => 'delete', $post['Post']['id']), null, '¿Estás seguro?' )?>
        <?php echo $html->link('Editar', array('action'=>'edit', 'id'=>$post['Post']['id']));?>
        </td>
        <td><?php echo $post['Post']['created']; ?></td>
    </tr>
    <?php endforeach; ?>

</table>