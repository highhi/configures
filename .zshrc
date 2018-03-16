source ~/.zplug/init.zsh

zplug "mafredri/zsh-async"
zplug "sindresorhus/pure"

zplug "zsh-users/zsh-syntax-highlighting"
zplug "zsh-users/zsh-history-substring-search"

zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-completions"
zplug "chrissicool/zsh-256color"
zplug "junegunn/fzf-bin", from:gh-r, as:command, rename-to:fzf, use:"*darwin*amd64*"
zplug "b4b4r07/enhancd", use:"init.sh"


# Install
if ! zplug check --verbose; then
    printf "Install? [y/N]: "
    if read -q; then
        echo; zplug install
    fi
fi

zplug load --verbose
