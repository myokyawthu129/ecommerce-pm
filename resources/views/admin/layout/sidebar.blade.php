<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" class="brand-link">
      <img src="" alt="PM computer" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light"></span>
    </a>


    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <a href="" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Color</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{ route('category.index') }}" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Category</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{ route('product.index') }}" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Product</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{ url('/admin/product-add-transaction') }}" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Product Transaction</p>
            </a>
          </li>
          <div class="dropdown-divider"></div>
          <li class="nav-item">
            <a href="#!" class="nav-link">
              <i class="far fa-circle nav-icon"></i>
              <form action="{{ url('/admin/logout') }}" method="POST" class="d-inline">
                @csrf
                <input type="submit" value="Logout" class="border-o btn-primary">
              </form>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
