set title
set mouse=a
set whichwrap=b,s,h,l,<,>,[,]
set autoread
set showcmd
set noswapfile
set nobackup
set showmode
set ruler

set number
set autoindent
set smartindent
set expandtab
set tabstop=4
set softtabstop=4
set shiftwidth=2
syntax on
set wildmenu
set cursorline
set hlsearch
set ignorecase
set smartcase
set incsearch
set backspace=indent,eol,start
set showmatch
set paste

autocmd FileType json setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType yaml setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType yml  setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType xml  setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType sh   setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType zsh  setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType html setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType css  setlocal shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType js   setlocal shiftwidth=2 tabstop=2 softtabstop=2

set encoding=utf-8
set ffs=unix,dos,mac

